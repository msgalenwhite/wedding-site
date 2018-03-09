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

ActiveRecord::Schema.define(version: 20180309182138) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "invitees", force: :cascade do |t|
    t.string "name", null: false
    t.string "password", default: "galenandchriswedding", null: false
    t.string "email"
    t.text "dietary_restrictions"
    t.boolean "attending"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "response_group_id"
    t.boolean "allow_plus_one", null: false
    t.boolean "using_plus_one"
    t.index ["response_group_id"], name: "index_invitees_on_response_group_id"
  end

  create_table "plus_ones", force: :cascade do |t|
    t.string "name"
    t.bigint "invitee_id", null: false
    t.index ["invitee_id"], name: "index_plus_ones_on_invitee_id"
  end

  create_table "response_groups", force: :cascade do |t|
    t.string "name", null: false
    t.boolean "baby", null: false
  end

  create_table "stories", force: :cascade do |t|
    t.text "body", null: false
    t.bigint "invitee_id", null: false
    t.index ["invitee_id"], name: "index_stories_on_invitee_id"
  end

end
