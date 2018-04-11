5+5;

// plution in the global space
{
    var lexical_1 = "lexical";
}
{
    var lexical_1 = "overwritten";
}

// no plution
{
    let block = "block";
    block
}

5+5;

{
    let block = "kcolb";
    block
}

function new_context() {
 let context_variable = "ctv" 
 {
    let context_scope = "cts" 
 }
}

new_context()

if (true) {
	let if_block = "if block"
}

if (true) {
	var lexical_1 = "lexical_1"
}

function cielings(){
	let sinker_6 = "sinker 6";
	{
		let sinker_5 = "sinker 5";
		{
			var huh = "huh";
			let sinker_4 = "sinker 4";
			{
				let sinker_3 = "sinker 3";
				{
					let sinker_2 = "sinker 2";
					{
						var floater = "floater";
						let sinker_1 = "sinker 1";
					}
					sinker_2
				}
				sinker_4
				huh
			}
			floater
			// sinker_2
			sinker_5
		}
		sinker_6
	}
	// sinker_1
}

lexical_1

// block

function context_demonstrater(){
  var lexical_2 = "inside function";
  lexical_2
  {
    let block_2 = "block 2";
  }
}

// lexical_2

context_demonstrater()

lexical_2
