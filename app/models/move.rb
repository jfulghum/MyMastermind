class Move < ApplicationRecord
  validates :real_move_array, presence: true
end
