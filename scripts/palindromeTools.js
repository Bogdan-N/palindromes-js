var PalindromeTools = (function(){
	var LONGEST_PALINDROM_CLASS = "longest";
	
	var _quickSort = function(arr, leftBorder, rigthBorder){
			if(rigthBorder <= leftBorder){
				return;
			}
		    var i = _partition(arr, leftBorder, rigthBorder);
		    _quickSort(arr, leftBorder, i - 1);
		    _quickSort(arr, i + 1, rigthBorder);
		}

	var _partition = function(arr, leftBorder, rigthBorder){
			var i = leftBorder - 1,
				j = rigthBorder,
				v = arr[rigthBorder].length;

			while(true){
				while(arr[++i].length < v);
				while(v < arr[--j].length){
					if(j === leftBorder){
						break;
					}
				}
				if(i >= j){
					break;
				}
				_exchange(arr, i, j);
			}
			_exchange(arr, i, rigthBorder);
			return i;
		}

	var _exchange = function(arr, indexA, indexB){
			var tmp = arr[indexA];
			arr[indexA] = arr[indexB];
			arr[indexB] = tmp;
		}

	var _clearOldResult = function(containerClassName){
			if(document.getElementsByClassName(LONGEST_PALINDROM_CLASS).length > 0){
				document.getElementsByClassName(containerClassName)[0].innerHTML = '';
			}
		}

	return{
		
		getPalindromString: function(inputClassName){
			if(typeof inputClassName !== "string"){
				throw new Error('Parameter must be a string only');
			}
			return document.getElementsByClassName(inputClassName)[0].value;
		},

		searchPalindromes: function(inputString){
			if(typeof inputString !== "string"){
				throw new Error('Parameter must be a string only');
			}
			var oddPalindroms = [],
				evenPalindroms = [],
				count = 0,
				originalString = inputString.trim(),
				palindrom = "";

			for(var i = 0; i < originalString.length; ++i){
				
					count = 0;

					while(count <= i && i + count < originalString.length && 
						originalString[i - count] === originalString[i + count]){
						if(count > 0){
							palindrom = originalString.slice(i - count, i + count + 1).trim();
							if(palindrom.length > 1) {
								oddPalindroms.push(palindrom);
							}
						}
							
						++count;
					}
					count = 0;
					while(i + count < originalString.length && i - count - 1 >= 0 &&
						originalString[i + count] === originalString[i - count - 1]){
						palindrom = originalString.slice(i - count - 1, i + count + 1);
						evenPalindroms.push(palindrom);
						
						++count;
				}
			
		}
			var palindroms = oddPalindroms.concat(evenPalindroms);
			_quickSort(palindroms, 0, palindroms.length - 1);

			return palindroms;			
		},

		showPalindroms: function(containerClassName, inputClassName){
			if(typeof containerClassName !== 'string' ||
			 typeof inputClassName !== 'string'){
				throw new Error('Parameters must be a string only');
			}

			var originalString = this.getPalindromString(inputClassName),
				palindroms = this.searchPalindromes(originalString),
				resultContainer = document.getElementsByClassName(containerClassName),
			 	label = null,
			 	indexOflastPalindrom = palindroms.length - 1;

			_clearOldResult(containerClassName);

			for(var i = palindroms.length-1; i >= 0; --i){
			    label = document.createElement('label');
			    if(palindroms[indexOflastPalindrom].length === palindroms[i].length){
			    	label.className = LONGEST_PALINDROM_CLASS;
			    }
				
				label.innerHTML = palindroms[i] + '<br/>';
				resultContainer[0].appendChild(label);
			}
		}
	}
})();