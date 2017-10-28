class AddArrayToMoves < ActiveRecord::Migration[5.1]
  def change
    add_column :moves, :real_move_array, :string, array: true, default: []
  end
end
