class NewsController < ApplicationController
#  before_action :authenticate

  def index
    @news = News.where(wall_id: Wall.where(user_id: current_user.all_news))
    render json: @news.to_json( :include => [{:user=>{:only => [:name,:email,:id, :avatar]}}])
    #@user.to_json( :include => [{:friends => {:only => [:name,:email,:id, :avatar]}}])
  end

  def create
    @user=User.find(params[:id])
    @wall=@user.wall
    @news=@wall.news.new(news_params)
    current_user.news << @news
    respond_to do |format|
    format.json do
      if @news.save
        render :json => @news
      else
        render :json => { :errors => @news.errors.messages }, :status => 422
      end
      end
    end
  end

  def article
    x = current_user.all_news
    @news = News.where(wall_id: Wall.where(user_id: current_user.all_news)).order(created_at: :DESC).page(params[:page])
  end

  def destroy
  end

  def news_params
    params.require(:news).permit(:text,:user_id,:wall_id, {images: []})
  end
end
