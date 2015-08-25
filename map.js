module.exports = (function() {
    "use strict";

    function normalize($value, $min, $max) {
        return ($value - $min) / ($max - $min);
    }

    function interpolate($normValue, $min, $max) {
        return $min + ($max - $min) * $normValue;
    }

    function map ($value, $min1, $max1, $min2, $max2) {

        if ($value < $min1){
            $value = $min1;
        }
        if($value > $max1){
            $value = $max1;
        }
        var res = interpolate(normalize($value, $min1, $max1), $min2, $max2);

        return res;
    }

    return map;
})();
