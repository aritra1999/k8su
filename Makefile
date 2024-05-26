run:
	npm run tauri dev

build: 
	npm run tari build

update-rust-dependencies: 
	cd ./src-tauri && cargo update && cd ../
