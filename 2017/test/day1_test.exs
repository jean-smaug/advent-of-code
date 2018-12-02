defmodule Aoc.Year2017.Day1Test do
    use ExUnit.Case
  
    test "PART 1 -- should make the sum if the next digit is the same" do
      assert Aoc.Year2017.Day1.part1("1122") == 3
      assert Aoc.Year2017.Day1.part1("1111") == 4
      assert Aoc.Year2017.Day1.part1("1234") == 0
      assert Aoc.Year2017.Day1.part1("91212129") == 9
    end
    
    # test "PART 2 -- should make the sum if the digit around are the same" do
    #   assert Aoc.Year2017.Day1.part2("1212") == 6
    #   assert Aoc.Year2017.Day1.part2("1221") == 0
    #   assert Aoc.Year2017.Day1.part2("123425") == 4
    #   assert Aoc.Year2017.Day1.part2("123123") == 12
    #   assert Aoc.Year2017.Day1.part2("12131415") == 4
    # end
  end
  