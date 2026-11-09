const multiplyValue = (value, multiplier) => {
    if (multiplier === undefined) {
        return value * 2;
    }
    else {
        return value * multiplier;
    }
};

const processInput = (value) => {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        if (value === true) {
            return "Active";
        }
        else {
            return "Inactive";
        }
    }
};

const formatCoordinate = (coordinate) => {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = (...arrays) => {
    const combinedArray = [];
    for (const currentArray of arrays) {
        combinedArray.push(...currentArray);
    }
    return combinedArray;
};

const getPopularCourses = (courses, minStudents) => {
    return courses.filter((course) => course.isPublished && course.students >= minStudents);
};

const pluckValues = (items, key) => {
    return items.map((item) => item[key]);
};

class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

export {};
