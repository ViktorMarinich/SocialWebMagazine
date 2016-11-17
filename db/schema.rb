# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161116214328) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "ar_internal_metadata", primary_key: "key", force: :cascade do |t|
    t.string   "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "comments", force: :cascade do |t|
    t.string   "text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "user_id"
    t.integer  "image_id"
    t.integer  "post_id"
  end

  add_index "comments", ["image_id"], name: "index_comments_on_image_id", using: :btree
  add_index "comments", ["post_id"], name: "index_comments_on_post_id", using: :btree
  add_index "comments", ["user_id"], name: "index_comments_on_user_id", using: :btree

  create_table "employees", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.boolean  "manager"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "friend_relations", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "friend_id"
    t.boolean  "confirmed",  default: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

  add_index "friend_relations", ["friend_id"], name: "index_friend_relations_on_friend_id", using: :btree
  add_index "friend_relations", ["user_id"], name: "index_friend_relations_on_user_id", using: :btree

  create_table "friendships", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "friend_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "friendships", ["user_id", "friend_id"], name: "index_friendships_on_user_id_and_friend_id", unique: true, using: :btree
  add_index "friendships", ["user_id"], name: "index_friendships_on_user_id", using: :btree

  create_table "galleries", force: :cascade do |t|
    t.string   "title"
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.string   "images",     default: [],              array: true
    t.integer  "user_id"
    t.integer  "news_id"
  end

  add_index "galleries", ["news_id"], name: "index_galleries_on_news_id", using: :btree
  add_index "galleries", ["user_id"], name: "index_galleries_on_user_id", using: :btree

  create_table "images", force: :cascade do |t|
    t.string   "image"
    t.datetime "created_at"
    t.boolean  "avatar",     default: false
    t.integer  "user_id"
    t.integer  "post_id"
    t.integer  "comment_id"
  end

  add_index "images", ["comment_id"], name: "index_images_on_comment_id", using: :btree
  add_index "images", ["post_id"], name: "index_images_on_post_id", using: :btree
  add_index "images", ["user_id"], name: "index_images_on_user_id", using: :btree

  create_table "messages", force: :cascade do |t|
    t.string   "text"
    t.integer  "user_id"
    t.integer  "receiver_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "messages", ["receiver_id"], name: "index_messages_on_receiver_id", using: :btree
  add_index "messages", ["user_id"], name: "index_messages_on_user_id", using: :btree

  create_table "news", force: :cascade do |t|
    t.string   "text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "user_id"
    t.integer  "wall_id"
    t.json     "images"
  end

  add_index "news", ["user_id"], name: "index_news_on_user_id", using: :btree
  add_index "news", ["wall_id"], name: "index_news_on_wall_id", using: :btree

  create_table "posts", force: :cascade do |t|
    t.string   "text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "user_id"
  end

  add_index "posts", ["user_id"], name: "index_posts_on_user_id", using: :btree

  create_table "ratings", force: :cascade do |t|
    t.integer  "like"
    t.integer  "dislike"
    t.integer  "estimator_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "user_id"
    t.integer  "comment_id"
    t.integer  "image_id"
    t.integer  "post_id"
  end

  add_index "ratings", ["comment_id"], name: "index_ratings_on_comment_id", using: :btree
  add_index "ratings", ["estimator_id", "user_id", "comment_id"], name: "index_ratings_on_estimator_id_and_user_id_and_comment_id", unique: true, using: :btree
  add_index "ratings", ["estimator_id", "user_id", "image_id"], name: "index_ratings_on_estimator_id_and_user_id_and_image_id", unique: true, using: :btree
  add_index "ratings", ["estimator_id", "user_id", "post_id"], name: "index_ratings_on_estimator_id_and_user_id_and_post_id", unique: true, using: :btree
  add_index "ratings", ["estimator_id"], name: "index_ratings_on_estimator_id", using: :btree
  add_index "ratings", ["image_id"], name: "index_ratings_on_image_id", using: :btree
  add_index "ratings", ["post_id"], name: "index_ratings_on_post_id", using: :btree
  add_index "ratings", ["user_id"], name: "index_ratings_on_user_id", using: :btree

  create_table "relationships", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "friend_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "relationships", ["user_id", "friend_id"], name: "index_relationships_on_user_id_and_friend_id", unique: true, using: :btree
  add_index "relationships", ["user_id"], name: "index_relationships_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "walls", force: :cascade do |t|
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "walls", ["user_id"], name: "index_walls_on_user_id", using: :btree

  add_foreign_key "comments", "images"
  add_foreign_key "comments", "posts"
  add_foreign_key "galleries", "news"
  add_foreign_key "images", "comments"
  add_foreign_key "images", "posts"
  add_foreign_key "news", "walls"
  add_foreign_key "ratings", "comments"
  add_foreign_key "ratings", "images"
  add_foreign_key "ratings", "posts"
end
