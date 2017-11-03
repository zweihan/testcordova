export function toPercent(num, dp){
    var pct = parseFloat(num);
    pct *= 100;
    pct = pct.toFixed(2);
    return pct.toString() + "%";
}