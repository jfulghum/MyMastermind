@moves.each do |move|
  json.set! move.id do
    json.partial! `api/moves/move`, move: move
  end
end
