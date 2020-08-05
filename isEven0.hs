-- Created by Jordi Ricarte
isEvenAux :: (Ord a) => a -> [a] -> Bool
isEvenAux n listEven
    | n == thisNum = True
    | n > thisNum = False
    | otherwise = isEvenAux n (tail listEven)
    where
        thisNum = head listEven

isEven :: (Ord a, Num a, Enum a) => a -> Bool
isEven n = isEvenAux n [2,4 .. ]
