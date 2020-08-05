# Created by Rafael Audibert

# It would actually be more idiomatic to call this function `even?`,
# but I will call it `is_even` for the sake of the meme
def is_even num
  if num.negative? then is_even -num elsif num.zero? then true else !is_even num - 1 end
end

# Example usage
# Hash[ (-10..10).collect { |v| [ v, is_even(v) ] } ]
# `{-10=>true, -9=>false, -8=>true, -7=>false, -6=>true, -5=>false, -4=>true, -3=>false, -2=>true, -1=>false, 0=>true, 1=>false, 2=>true, 3=>false, 4=>true, 5=>false, 6=>true, 7=>false, 8=>true, 9=>false, 10=>true}`
