FactoryGirl.define do
  factory :message do
    content Faker::Lorem.sentence
    image { File.open("spec/fixtures/image.jpg") }
    user
    group
  end
end
