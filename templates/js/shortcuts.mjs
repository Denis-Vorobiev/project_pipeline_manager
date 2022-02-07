class Sc{
    createDiv(className ='',id='',style='',innerHtml =''){
        this.div = document.createElement('div')
        this.div.className = className
        this.div.id = id
        this.div.style = style
        this.div.innerHtml =innerHtml
    
        return this.div
    }
    createInput(className='',placeholder='',value=''){
        this.div = document.createElement('input')
        this.div.className = className
        this.div.placeholder = placeholder
        this.div.value = value
    
        return this.div
    }
    createHelement(hValue = 1,innerText = ''){
        this.h = document.createElement('h'+hValue)
        this.h.innerText = innerText
    
        return this.h
    }
    createButton(className ='',innerText='button',id=''){
        this.b = document.createElement('button')
        this.b.className = className
        this.b.innerText = innerText
        this.b.id =id
        
        return this.b 
    }


}
export let sc = new Sc


