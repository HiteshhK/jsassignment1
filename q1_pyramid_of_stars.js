/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (n) => {
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i+1; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i; k++) {
    string += "* ";
  }
  string += " \n";
}
return string;
};

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
