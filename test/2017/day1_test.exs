defmodule Aoc.Year2016.Day1Test do
  use ExUnit.Case

  test "PART 1 -- should make the sum if the next digit is the same" do
    assert Aoc.Year2016.Day1.part1("R2, L3") == 5
    assert Aoc.Year2016.Day1.part1("R2, R2, R2") == 2
    assert Aoc.Year2016.Day1.part1("R5, L5, R5, R3") == 12
  end

end
  