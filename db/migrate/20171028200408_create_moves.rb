class CreateMoves < ActiveRecord::Migration[5.1]
  def change
    create_table :moves do |t|
      t.string :move_array

      t.timestamps
    end
  end
end
