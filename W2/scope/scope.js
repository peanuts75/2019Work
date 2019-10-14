var anothervar                  //public variable 'anothervar' declared but not defined

const func1 = () => {           //function func1
    let variable = 15           //private func1 variable 'variable' = 15
    func2(variable)             //perform func2 with 'variable' (pass private variable to another function)
}

const func2 = (vary) => {       //function func2 using variable passed from func1
    let otherVariable = vary    //private func2 variable 'otherVariable' = vary = 15
    anotherVar = otherVariable  //public variable 'anotheVar' = 'otherVariable' = 15

}

const func3 = () => {           //function func3
    console.log(anotherVar)     //print anotherVar public variable to console log (15)
}

func1()                         //perform func1, result should be 15 in console
func3()                         //perform func3
