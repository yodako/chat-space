class UsersController < ApplicationController

  def index
   @user = User.where('name LIKE(?)', "%#{params[:keyword]}%").limit(20)
   respond_to do |format|
     format.html
     format.json
   end
  end

  def edit
  end

  def update
    user = User.find(current_user)
    if user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
end
