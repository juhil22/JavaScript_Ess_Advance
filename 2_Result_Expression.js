// What will be the result for these expressions?
// 1. 5 > 4
// 2. "apple" > "pineapple"
// 3. "2" > "12"
// 4. undefined == null
// 5. undefined === null
// 6. null == "\n0\n"
// 7. null === +"\n0\n"

Answer

// 1. 5 > 4

//     Result: true
//     Explanation: 5 is greater than 4.

// 2. "apple" > "pineapple"

//     Result: false
//     Explanation: "apple" comes before "pineapple" alphabetically.

// 3. "2" > "12"

//     Result: true
//     Explanation: String comparison is character-by-character; "2" is greater than "1".

// 4. undefined == null

//     Result: true
//     Explanation: Both represent "no value" and are loosely equal.

// 5. undefined === null

//     Result: false
//     Explanation: They are different types; strict comparison requires the same type.

// 6. null == "\n0\n"

//     Result: false
//     Explanation: null only equals undefined in loose comparison, not strings.

// 7. null === +"\n0\n"

//     Result: false
//     Explanation: null is not the same type or value as 0 (converted from string).