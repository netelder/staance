class Campaign < ActiveRecord::Base
  attr_accessible :topic_id, :image_url, :video_url, :funding_deadline 
  attr_accessible :short_blurb, :location, :cause_url, :funding_goal, :pitch, :title
  attr_accessible :tag_list

  validates_presence_of :video_url, :title, :funding_deadline, :short_blurb, :location, :funding_goal, :pitch, :title, :image_url, :tag_list

  has_many :campaign_users
  has_many	:users, through: :campaign_users
  belongs_to :topic

  acts_as_taggable
end
