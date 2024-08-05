function fibonacci(num) {
// your code here
	let a=0,b=1,c,i;
    if(num===1)return a;
	if( num===2)return b;
    for(i=2;i<num;i++)
    {
    c=a + b;
    a=b;
    b=c;
    }
    return b;
}

module.exports = fibonacci;