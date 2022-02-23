(function(core){

    class Router
    {
        // public properties
        get ActiveLink()
        {
            return this.m_activeLink;
        }

        set ActiveLink(link)
        {
            this.m_activeLink = link;
        }

        // constructor
        constructor()
        {
            this.ActiveLink = "";
        }

        // public methods

        /**
         * This method Adds a new Route to the Routing Table
         *
         * @param {string} route
         * @returns {void}
         */
        Add(route)
        {
            this.m_routingTable.push(route);
        }

        /**
         * This replaces the current Routing Table object (if it exists) with a reference to a new 
         * string array of routes
         * Routes should begin with the '/' character
         *
         * @param {string[]} routingTable
         * @returns {void}
         */
        AddTable(routingTable)
        {
            this.m_routingTable = routingTable;
        }

        /**
         * This method finds the index of the route in the routing table
         * otherwise, it returns -1 if the route is not found
         *
         * @param {string} route
         * @returns {number}
         */
        Find(route)
        {
            return this.m_routingTable.indexOf(route);
        }

        /**
         * This method removes a route from the Routing Table
         * It returns true if the route was successfully removed,
         * otherwise, it returns false
         *
         * @param {string} route
         * @returns {boolean}
         */
        Remove(route)
        {
            // if the route is found
            if(this.Find(route) > -1)
            {
                this.m_routingTable.splice(this.Find(route), 1);
                return true;
            }
            return false;
        }

        // public override functions
        /**
         * This method returns the routing table as a comma-separated string
         *
         * @returns {string}
         */
        toString()
        {
            return this.m_routingTable.toString();
        }
    }

    core.Router = Router;

})(core || (core = {}));