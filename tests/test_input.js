module.exports = {
    beforeEach: browser => {
        browser.url("https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html")
    },
   after: browser => {
        browser.end()
    },

    'enter values and submit': browser => {
        browser.waitForElementPresent('.cake', 1000)
            .setValue('input[name="hdrInput"]', 'Header Test')
            .setValue('input[name="mkeInput"]', 'AA')
            .setValue('input[name="oriInput"]', 'ABC123456')
            .setValue('input[name="namInput"]', 'John Doe')
            .setValue('input[name="sexInput"]', 'M')
            .setValue('input[name="racInput"]', 'W')
            .setValue('input[name="hgtInput"]', '130')
            .setValue('input[name="wgtInput"]', '150')
            .setValue('input[name="haiInput"]', 'Brown')
            .setValue('input[name="offInput"]', 'Hit and Run')
            .setValue('input[name="dowInput"]', '07012014')
            .setValue('input[name="olnInput"]', '1234567890')
            .setValue('input[name="olsInput"]', 'NY')
            .setValue('input[name="olyInput"]', '07012016')
            .setValue('input[name="licInput"]', 'ABC123')
            .setValue('input[name="lisInput"]', 'NY')
            .setValue('input[name="liyInput"]', '2017')
            .pause(1000)
            .click('#saveBtn')
            .expect.element('span[name="queryBody"]').text.to.equal('Header Test.AA.ABC123456.John Doe.M.W.130.150.Brown.Hit and Run.07012014.1234567890.NY.07012016.ABC123.NY.2017')
    },

    'restart / clear button test': browser => {
        browser.click('#clearBtn')
    },

    'break Header and Sex Field and submit': browser => {
        browser.waitForElementPresent('.cake', 1000)
            .setValue('input[name="hdrInput"]', 'Header Test Test Test Test')
            .setValue('input[name="mkeInput"]', 'AA')
            .setValue('input[name="oriInput"]', 'ABC123456')
            .setValue('input[name="namInput"]', 'John Doe')
            .setValue('input[name="sexInput"]', 'MFM')
            .setValue('input[name="racInput"]', 'W')
            .setValue('input[name="hgtInput"]', '130')
            .setValue('input[name="wgtInput"]', '150')
            .setValue('input[name="haiInput"]', 'Brown')
            .setValue('input[name="offInput"]', 'Hit and Run')
            .setValue('input[name="dowInput"]', '07012014')
            .setValue('input[name="olnInput"]', '1234567890')
            .setValue('input[name="olsInput"]', 'NY')
            .setValue('input[name="olyInput"]', '07012016')
            .setValue('input[name="licInput"]', 'ABC123')
            .setValue('input[name="lisInput"]', 'NY')
            .setValue('input[name="liyInput"]', '2017')
            .click('#saveBtn')
            // .pause('1000')
            .useXpath()
            // .expect.element('//list[@id="errorList"]/li[1]').text.to.equal('The "Header" field should be between 9 and 19 characters long.')
            // browser.expect.element('//list[@id="errorList"]/li[2]').text.to.equal('The "Sex" field should be 1 character long.')
            .verify.attributeEquals('//list[@id="errorList"]/li[1]', 'outerText', 'The "Header" field should be between 9 and 19 characters long.')
            .verify.attributeEquals('//list[@id="errorList"]/li[2]', 'outerText', 'The "Sex" field should be 1 character long.')
            
    }
}


/*
Header: Required, 9-19 characters in length, any allowed
MKE: Required, 2-4 alpha/special characters in lenth
Originating Agency Identifier: Required, 9 alphanumeric characters in length
Name: Rewired, 3-30 characters in length, any allowed
Sex: Required, 1 character in length, alphabet only
Race: Requires, 1 character in length, alphabet only
Height: Required, 3 characters in length, numeric only
Weight: Required, 3 characters in length, numeric only
Hair: Required, 4-10 characters in length, alpha only
Offense: Required, 5-15 characters in length, any allowed
Date of Warrant/Violation, 8 characters in length, numeric in MMDDYYYY format
Drivers License: Optional, 1-20 characters in length, any characters allowed, if included requires DL State & DL Expiration Year
DL State: Optional, 2 characters in length, State Abbreviations only, if included requires Drivers Licens & DL Year
DL Year: Optional, 4 characters in length, numberic in YYYY format, if included requires Drivers License & DL State
License Plate: Optional, 5-8 alphanumeric characters in length, if included requires License State & License Year
License State: Optional, 2 characters in length, State Abbreviations only, if included requires License Plate and License Year
License Year: Optional, 4 characters in length, numeric in YYYY format, if included requires License Plate and License Year
*/