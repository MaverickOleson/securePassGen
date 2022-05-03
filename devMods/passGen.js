const passGen = {
	possible: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%&'()*+,-./:;<>=?@[]\\^_${'`'}{}|~ `,
	filter(symbs = true, nums = true, upCase = true, lowCase = true) {
		var regex = '';
		if (symbs) regex += '\\W';
		if (nums) regex += '\\d';
		if (upCase) regex += 'A-Z';
		if (lowCase) regex += 'a-z';
		regex = new RegExp(`[${regex}]+`, 'g');
		return (this.possible.match(regex)) ? this.possible.match(regex).join('') : '';
	},
	generate(len = 8, symbs, nums, upCase, lowCase) {
		const possible = this.filter(symbs, nums, upCase, lowCase);
		const password = [];
		for (var i = 0; i < len; i++) {
			password.push(possible[Math.floor(Math.random() * (possible.length + 1))]);
		}
		console.log(password);
	}
}

passGen.generate(100);

module.exports = passGen;