class TopicsController < ApplicationController
  def index
    @topics = Topic.all
  end

  def show
    @topic = Topic.find_by_id(params[:id])
    @campaigns = Campaign.where(topic_id: params[:id])
  end
end
