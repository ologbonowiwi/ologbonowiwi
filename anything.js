class Solution {
  #separator = '##@##'

  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    return strs.map(str => this.#separator + str.length + this.#separator + str).join('')
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    console.log(str)
    let letters = 0;
    const strs = [];
    for (let i = 0; i < str.length; i++) {
      const amountWithSeparator = str.substring(i).match(new RegExp(this.#separator + '\\d*' + this.#separator));

      // checking if the match is the beginning
      // of the substring which starts on i
      if (amountWithSeparator && amountWithSeparator.index === 0) {
        console.log("🚀 ~ Solution ~ decode ~ amountWithSeparator:", amountWithSeparator)
        const amount = amountWithSeparator[0].match(/\d*/);
        console.log("🚀 ~ Solution ~ decode ~ amount:", amount)

        // skipping the digit with the amount
        i += amount.length
        // skipping the separator
        i += this.#separator.length

        console.log('str', str)

        console.log('str.substring(i, i + Number(amount))', str.substring(i, i + Number(amount)))

        // pushes the string that will come into strs
        strs.push(str.substring(i, i + Number(amount)))
        console.log('strs :>>', strs)
      }
    }

    console.log('strs :>>', strs)

    return strs
  }
}

const solution = new Solution()

const encoded = solution.encode(["1,23", "45,6", "7,8,9"])
console.log('encoded :>> ', encoded);

const decoded = solution.decode(encoded)
console.log('decoded :>> ', decoded);