/* filter sort and pagination */

class ProductFeatures {

    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString

    }

    //filter
    filtering() {
        return this
    }


    //sort
    sorting() {
        // if (this.queryString.sort) {
        //     const sortBy = this.queryString.sort.split(' , ').join(' ');
        //     // console.log('Sort by =',sortBy);
        //     if (this.query.sortBy) {
        //         // this.query = this.query.sort(sortBy).reverse()
        //         this.query=this.query ?.sort((a,b)=>(a.price > b.price ? 1 : -1))
        //     } else {
        //         this.query = this.query.sort(sortBy)
        //     }
        // } else {
        //     this.query.sort('-createdAt')
        // }



        let sortBy = this.queryString.sort.split(" , ").join(" ")
        switch (sortBy) {
            case "price":
                return this.query.sort()
                break;
            case "price hl":
                return this.query?.sort((a, b) => b.price - a.price ? -1 : 1)
                break;
        }
        return this
    }

    //pagination
    pagination() {
        return this
    }


}

module.exports = ProductFeatures