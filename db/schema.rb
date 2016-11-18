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

ActiveRecord::Schema.define(version: 20161118112724) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "friendships", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "friend_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "friendships", ["user_id"], name: "index_friendships_on_user_id", using: :btree

  create_table "news", force: :cascade do |t|
    t.string   "text"
    t.integer  "user_id"
    t.json     "images"
    t.integer  "wall_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "user_name"
  end

  add_index "news", ["user_id"], name: "index_news_on_user_id", using: :btree

  create_table "relationships", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "friend_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "relationships", ["friend_id"], name: "index_relationships_on_friend_id", using: :btree
  add_index "relationships", ["user_id"], name: "index_relationships_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.string   "avatar"
    t.string   "password_digest"
    t.string   "remember_digest"
    t.string   "activation_digest"
    t.boolean  "activated"
    t.datetime "activated_at"
    t.string   "confirm_token"
    t.string   "reset_token"
    t.datetime "token_created"
  end

  create_table "walls", force: :cascade do |t|
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "walls", ["user_id"], name: "index_walls_on_user_id", using: :btree

  add_foreign_key "friendships", "users"
  add_foreign_key "news", "users"
  add_foreign_key "relationships", "users"
  add_foreign_key "walls", "users"
end
