class CreateStickers < ActiveRecord::Migration
  def change
    create_table :stickers do |t|
      t.string :stc_text
      t.integer :x
      t.integer :y

      t.timestamps
    end
  end
end
