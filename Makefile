ifdef DOTENV
	DOTENV_TARGET=dotenv
else
	DOTENV_TARGET=.env
endif

################
# Entry Points #
################
lint: $(DOTENV_TARGET)
	docker-compose run --rm cypress make _lint

lintFix:
	docker-compose run --rm cypress make _lintFix

gitlab_lint:
	make _lint

test: $(DOTENV_TARGET) clean lint
	docker-compose run --rm cypress make _test

testMobile: $(DOTENV_TARGET) clean
	docker-compose run --rm cypress make _testMobile

testEnergy: $(DOTENV_TARGET) clean
	docker-compose run --rm cypress make _testEnergy

gitlab_test: $(DOTENV_TARGET) clean
	make _test

gitlab_testMobile: $(DOTENV_TARGET) clean
	make _testMobile

gitlab_testEnergy: $(DOTENV_TARGET) clean
	make _testEnergy

##########
# Others #
##########

# Create .env based on .env.template if .env does not exist
.env:
	@echo "Create .env with .env.template"
	cp .env.template .env

# Create/Overwrite .env with $(DOTENV)
dotenv:
	@echo "Overwrite .env with $(DOTENV)"
	cp $(DOTENV) .env

clean:
	rm -fr ./tests/results/screenshots/*
	rm -fr ./tests/results/videos/*

_test:
	/node_modules/.bin/cypress run --headless --browser chrome

_testMobile:
	/node_modules/.bin/cypress run --headless --browser chrome --spec "tests/*mobile*spec.js"

_testEnergy:
	/node_modules/.bin/cypress run --headless --browser chrome --spec "tests/*energy*spec.js"

_lint:
	/node_modules/eslint/bin/eslint.js tests/pageObjects

_lintFix:
	/node_modules/eslint/bin/eslint.js tests/pageObjects --fix