var longestCommonPrefix = function(strs) {
  var res;
  res = "";

  for (var i = 0, _pj_a = strs[0].length; i < _pj_a; i += 1) {
    for (var s, _pj_d = 0, _pj_b = strs, _pj_c = _pj_b.length; _pj_d < _pj_c; _pj_d += 1) {
      s = _pj_b[_pj_d];

      if (i === s.length || s[i] !== strs[0][i]) {
        return res;
      }
    }

    res += strs[0][i];
  }

  return res;
};