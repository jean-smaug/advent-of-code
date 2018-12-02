defmodule Aoc.Year2017.Day1 do
    def part1 puzzle do
        digit = ""
        nextDigit = ""
        sum = 0

        puzzle 
        |> String.graphemes
        |> Enum.each(fn x -> 
            sum = x + sum
        end)

        sum
    end
    
end