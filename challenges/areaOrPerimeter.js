/*
You are given the length and width of a 4-sided polygon. 
The polygon can either be a rectangle or a square.

If it is a square, return its area. 
If it is a rectangle, return its perimeter.

area_or_perimeter(6, 10) --> 32
area_or_perimeter(4, 4) --> 16

Tests
area_or_perimeter(5, 5)
area_or_perimeter(10, 20)

*/

function area_or_perimeter(l, w) {
    return (l == w) ? l*w : (l*2 + w*2);

    // if (l == w) {
    //     return l*w;
    // } else {
    //     return l*2 + w*2;
    // }

}
