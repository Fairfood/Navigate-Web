interface Lip {
    value: string;
    color: string;  
}

// Interface for the production cost property
interface ProdCost {
    value: string;  
    color: string;  
}

// Interface for the production property
interface Production {
    value: string;  
    color: string;  
}

// Interface for each location object
interface Location {
    id: number;                     
    coordinate: [number, number];   
    lip: Lip;                      
    prod_cost: ProdCost;           
    production: Production;         
}

export interface Map {
    location: Location[];
}