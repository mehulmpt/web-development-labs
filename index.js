import {
	CustomClass,
	instanceOfCustom,
	mySymbol,
	sharedSymbol,
	MyCollection,
} from './symbols.js'
nconsole.log(mySymbol, sharedSymbol)
nconsole.log(instanceOfCustom())
nconsole.log([...new MyCollection()])
