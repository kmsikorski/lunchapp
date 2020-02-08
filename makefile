MAKEFLAGS += --silent

PYTHON_VERSION = "3.8.1"
VENV_NAME := $(shell cat .python-version)

setup-venv: _install_virtualenv _install_packages


run: _run_backend


_install_virtualenv:
	echo "Checking python pyenv and installation..."
	if pyenv versions | grep -q $(PYTHON_VERSION); then \
		echo "python $(PYTHON_VERSION) installation was found in pyenv"; \
	else \
		echo "python $(PYTHON_VERSION) installation was not found in pyenv, installing it..."; \
		pyenv install $(PYTHON_VERSION); \
	fi

	echo "Installing virtual environment..."
	echo "Uninstalling previous environment..."
	pyenv uninstall -f $(VENV_NAME)
	echo "Installing new environment..."
	pyenv virtualenv $(PYTHON_VERSION) $(VENV_NAME)

_install_packages:
	echo "Installing packages and dependencies..."
	pip install -r requirements.txt

_run_backend:
	flask run