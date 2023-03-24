class OrdersController < ApplicationController
  before_action :set_menu_item, only: [:new, :create, :confirm]

  def new
    @order = Order.new
  end

  def create
    @order = Order.new(order_params)
    @order.user_id = current_user.id
    @order.menu_item_id = @menu_item.id

    if @order.quantity <= @menu_item.stock && @order.save
      @menu_item.stock -= @order.quantity
      @menu_item.save
      flash[:notice] = "注文が完了しました"
      redirect_to orders_path
    else
      flash[:alert] = "在庫が足りません"
      render :new
    end
  end

  def confirm
    @order = Order.new(order_params)
    @order.menu_item_id = @menu_item.id
    @subtotal = @menu_item.price * @order.quantity
  end

  private
  def set_menu_item
    @menu_item = MenuItem.find(params[:menu_item_id])
  end

  def order_params
    params.require(:order).permit(:quantity, :menu_item_id)
  end
end
