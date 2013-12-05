class AddListIdColumnToItems < ActiveRecord::Migration
  def change
    add_column :items, :weigth, :integer
  end
end
