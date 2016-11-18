class User < ActiveRecord::Base
before_save :downcase_email
before_create :confirmation_token
mount_uploader :avatar, ImageUploader
has_many :relationships,foreign_key: "user_id",class_name:  "Relationship", dependent: :destroy
has_many :outcoming, through: :relationships,  source: :user
has_many :reverse_relationships, foreign_key: "friend_id", class_name:  "Relationship", dependent: :destroy
has_many :incoming, through: :reverse_relationships, source: :friend
has_many :friendships, dependent: :destroy
has_many :friends, through: :friendships
#has_many :galleries
has_one :wall
has_many :news
#validates :email, presence: true, uniqueness: {case_sensitive: false}, format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i}
#validates :password , length: { minimum: 4 }
#validates :name, presence: true, length: { minimum: 4 }
#validates :first_name, presence: true, length: { minimum: 3 }
#validates :last_name, presence: true, length: { minimum: 3 }
has_secure_password


def all_news
x= self.friend_ids
x << self.id
end

def authenticated?(remember_token)
return false if remember_digest.nil?
BCrypt::Password.new(remember_digest).is_password?(remember_token)
end

def email_activate
return true unless self.activated
self.activated = true
self.confirm_token = nil
self.activated_at = Time.now
save!(:validate => false)
end

def generate_reset_token
self.reset_token = User.secure_random_str
self.token_created =  Time.now
save!(:validate => false)
end

def is_reset_token?
if ((Time.now-self.token_created)/60).round >120
  self.update_attribute(:reset_token,nil)
  false
else
  true
end
end

private

#  def delete_user_image_folder
#      FileUtils.remove_dir(File.join(Rails.root, File.join( 'public' ,'uploads','user','profile_img',"#{self.id}")), :force => true)
#  end

def downcase_email
self.email = email.downcase
end

def confirmation_token
if self.confirm_token.blank?
  self.confirm_token = User.secure_random_str
end
end

def self.secure_random_str
SecureRandom.urlsafe_base64.to_s
end

def self.bcrypt_str(string,cost=10)
BCrypt::Password.create(string,cost: cost)
end
end
