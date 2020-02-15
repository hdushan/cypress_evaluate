const commonTestData = {
    newUserDetails: {
        namePrefix: 'Test',
        emailDomain: 'mailinator.com',
        contactNumber: '0404788547',
        dob: '01/01/1980',
        password: 'AWqasde321',
        address: 'Level 6 17-19 Bridge St, Sydney NSW 2000'
    }
}

const environmentSpecificTestData = {
    dev: {
        ...commonTestData
    },
    qa: {
        ...commonTestData
    },
    preprod: {
        ...commonTestData
    },
    production: {
        ...commonTestData,
        verifiedCreditCard: {
            number: '4111111111111111',
            expiryDate: '01/21',
            cvv: '111'
        }
    }
}

module.exports =  environmentSpecificTestData[Cypress.env('ENV')]