async function o(o){try{const t=await fetch(`http://localhost:4004/books/${o}`),c=await t.json();console.log(c)}catch(o){console.log(o.message)}}!async function(){try{const o=await fetch("http://localhost:4004/books"),t=await o.json();console.log(t)}catch(o){console.log(o.message)}}(),o(2),o(8);
//# sourceMappingURL=index.5b3f909c.js.map
