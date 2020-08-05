-- Created by Jordi Ricarte
isEvenAux :: (Ord a, Num a) => a -> [a] -> Bool
isEvenAux n listEven
    | n == thisNum = True
    | n == thisNumPlusOne = False
    | otherwise = isEvenAux n (tail listEven)
    where
        thisNum = head listEven
        thisNumPlusOne = 1 + thisNum

isEven :: (Ord a, Num a, Enum a) => a -> Bool
isEven n = if n>=0 
    then isEvenAux n l
    else isEvenAux (abs n) l
    where
        l = [0,2 .. ]
