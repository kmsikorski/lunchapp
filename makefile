MAKEFLAGS += --silent


setup-venv: _install_virtualenv _install_packages


run: _run_backend


_install_virtualenv:
	echo "Installing virtual environment..."
	echo "Uninstalling previous environment..."
	pyenv uninstall -f "its"
	echo "Installing new environment..."
	pyenv virtualenv "3.6.5" "its"

_install_packages:
	echo "Installing packages and dependencies..."
	pip install -r requirements.txt

_run_backend:
	flask run