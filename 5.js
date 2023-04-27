// 5.An analyzeArray function that takes an array 
// of numbers and returns an object with
// the following properties: average,
// min, max, and length.

function calc(array)
{
    function average(array)
    {
        if (array.length === 0) {
            return 0;
        }
        
        const sum = array.reduce((acc, curr) => acc + curr);
        return sum / array.length;
    }
    function min(array)
    {
        return Math.min(...array)
    }
    function max(array)
    {
        return Math.max(...array)
    }
    function length(array)
    {
        return array.length
    }
    function analyzeArray(array)
    {
        const result={}
        result.average=average(array)
        result.min=min(array)
        result.max=max(array)
        result.length=length(array)
        return result;
    }
    return analyzeArray(array)
}


module.exports=calc













