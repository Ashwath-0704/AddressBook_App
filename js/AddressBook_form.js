/**
 * @author -> Ashwath Naidu <ashwath.bly@gmail.com> 
 * @purpose -> AddressBook Class with New Attributes
 */
class AddressBook {

    // ( Getter and Setter )
    // name
    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z ]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw "Name is incorrect";
    }

    //phoneNumber
    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        const pattern_PHONE_NUMBER = RegExp('^(91 )[5-9][0-9]{9}$');
        if (pattern_PHONE_NUMBER.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else throw "Phone number is incorrect";
    }

    // address
    get address() { return this._address; }
    set address(address) {
        const pattern_ADDRESS_CITY_STATE = RegExp('^[A-Za-z.+, ]{4,}$');
        if (pattern_ADDRESS_CITY_STATE.test(address))
            this._address = address;
        else throw "Address is incorrect";
    }

    //zipCode
    get zipCode() { return this._zipCode; }
    set zipCode(zipCode) {
        const pattern_ZipCode = RegExp('^[0-9 ]{5,10}$');
        if (pattern_ZipCode.test(zipCode))
            this._zipCode = zipCode;
        else throw "Zip code is incorrect";
    }

    //city
    get city() { return this._city; }
    set city(city) { this._city = city; }

    // state
    get state() { return this._state; }
    set state(state) { this._state = state; }

    toString() {
        return (" Full name = " + this._name + ", phoneNumber= " + this._phoneNumber + ", address= " + this._address + ", city= " + this._city + ", state= " + this._state + ", zip= " + this._zipCode);
    }

}