class Api::MovesController < ApplicationController

  def index
    @moves = Move.all
  end

  def create
    @move = Move.new(move_params)
    if @move.save
      render 'api/moves/index'
    else
      render json: @move.errors.full_messages, status: 422
    end
  end
  
  private

  def move_params
    params.require(:move).permit(:move_array)
  end
end
