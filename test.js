export class Test{
    #testBody
    #type
    #id
    #result={
        status: 'Pass'
    }
    constructor(testBody, type, id){
        this.#testBody = testBody
        this.#type = type
        this.#id = id
    }
    static Case(testBody, type = '@regression', id = 1){
        return new Test(testBody, type, id)
    }
    execute(){
        try{
            this.#testBody()
        }catch(error){
          this.#result.status = 'Fail'
          this.#result.comment = error.message
        }
    }
    get executionResult(){
        return this.#result
    }
    get type(){
        return this.#type
    }
    get id(){
        return this.#id
    }
}