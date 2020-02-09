ifdef DOTENV
	DOTENV_TARGET=dotenv
else
	DOTENV_TARGET=.env
endif

################
# Entry Points #
################

test: $(DOTENV_TARGET) clean
	docker-compose run --rm cypress make _test

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